import { AWS_S3_URL } from '../../../../constrants/envs';

export const listImages = (objects: any) => {
  if (!objects) return [];

  const mapped = objects.map((obj) => ({
    url: `${AWS_S3_URL}/${obj.Key}`,
  }));

  return mapped;
};
