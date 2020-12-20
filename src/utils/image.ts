import { QMovie, QPixmap } from '@nodegui/nodegui';
import phin from 'phin';
import { isValidUrl } from './url';

export async function getLoadedPixmap(imageUrlOrPath: string): Promise<QPixmap> {
  const pixMap = new QPixmap();
  if (isValidUrl(imageUrlOrPath)) {
    const res = await phin(imageUrlOrPath);
    const imageBuffer = Buffer.from(res.body);
    pixMap.loadFromData(imageBuffer);
  } else {
    pixMap.load(imageUrlOrPath);
  }
  return pixMap;
}

export async function getLoadedQMovie(imageUrlOrPath: string): Promise<QMovie> {
  const movie = new QMovie();
  if (isValidUrl(imageUrlOrPath)) {
    const res = await phin(imageUrlOrPath);
    const imageBuffer = Buffer.from(res.body);
    movie.loadFromData(imageBuffer);
  } else {
    movie.setFileName(imageUrlOrPath);
  }
  return movie;
}
