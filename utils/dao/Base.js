import firebase from 'firebase'

export default class Template {
  constructor() {
    this.database = firebase.database()
    this.ref = null
  }

  static fbListToArray(fbList) {
    if (!fbList) return []
    return Object.entries(fbList).map(([id, item]) => ({
      ...item,
      id
    }))
  }

  create(payload = {}) {
    if (!payload.createdAt) {
      const createdAt = new Date().getTime()
      const updatedAt = createdAt
      payload = { ...payload, createdAt, updatedAt }
    }

    const createdKey = this.ref.push().key
    return this.ref
      .child(createdKey)
      .update(payload)
      .then(() => this.getById(createdKey))
  }

  getById(id) {
    return new Promise(resolve => {
      return this.ref.child(id).once('value', function(snapshot) {
        const body = snapshot.val()
        return resolve({
          ...body,
          id
        })
      })
    })
  }

  list() {
    return new Promise(resolve => {
      this.ref.once('value', function(snapshot) {
        const list = Template.fbListToArray(snapshot.val())
        return resolve(list)
      })
    })
  }

  remove(id) {
    return this.ref.child(id).remove()
  }
}
