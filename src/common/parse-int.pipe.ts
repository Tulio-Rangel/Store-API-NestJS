import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(
    value: any /*Dejo Any, pero si sé que voy a recibir un string, se le pone string y así*/,
    metadata: ArgumentMetadata,
  ) {
    const val = parseInt(value, 10); /**El 10 es porque es base 10 */
    if (isNaN(val)) {
      throw new BadRequestException(`${value} is not an integer/number`);
    }
    return val;
  }
}

/** ahora esto se importa y se hace lo mismo que el parse de nest */
