const rules = [
  ['Dashboard'],
  ['Feed'],
  ['Videos'],
  ['Dashboard', 'Feed'],
  ['Dashboard', 'Feed', 'Videos'],
  ['Feed', 'Videos'],
  ['Dashboard', 'Videos'],
  []
]
export default function handler(req, res) {
  const randomNum = new Date().getSeconds()
  const permissionRule = (randomNum + 1) % 8
  res.status(200).json({ name: 'John Doe', roles: rules[permissionRule] })
}