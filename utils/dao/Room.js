import Base from './Base'
export default class Template extends Base {
  constructor() {
    super()
    this.ref = this.database.ref('Rooms')
  }
}

Template.DEFAULT_ROOM = {
  version: 0,
  doc: JSON.stringify({
    type: 'doc',
    content: [
      {
        type: 'code_block',
        content: [{ type: 'text', text: `const a = 1\nconsole.log(a)` }]
      }
    ]
  })
}
