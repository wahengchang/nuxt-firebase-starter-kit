export default function(rawObject = {}) {
  const { displayName, email } = rawObject
  return { displayName, email }
}
