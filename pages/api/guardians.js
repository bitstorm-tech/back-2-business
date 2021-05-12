import Guardian from '../../backend/models/guardians';

export default async function handler(req, res) {
  const newGuardian = await new Guardian(req.body).save();
  res.send(newGuardian);
}
