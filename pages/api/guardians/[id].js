import Guardian from '../../../backend/models/guardians';

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    await _delete(req, res);
  }
}

async function _delete(req, res) {
  const {id} = req.query;
  const guardian = await Guardian.findById(id);
  guardian.remove();
  res.end();
}
