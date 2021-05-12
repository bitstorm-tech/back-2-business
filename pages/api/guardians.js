import Guardian from '../../backend/models/guardians';

export default async function handler(req, res) {
  const newGuardian = req.body;
  new Guardian(newGuardian).save();
  res.send();
}
