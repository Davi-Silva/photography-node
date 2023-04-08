import { Request, Response } from 'express';

export const getPhoto = (_req: Request, res: Response) => {
  try {
    return res.status(200).send({ ok: true });
  } catch (errors: any) {
    return res.status(500).send({
      errors,
    });
  }
};
