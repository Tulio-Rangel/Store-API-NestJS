import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly price: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly stock: number;

  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}

//El signo "?" básicamente dice que el atributo es opcional
/*export class UpdateProductDto {
  @IsString()
  readonly name?: string;

  @IsString()
  readonly description?: string;

  @IsNumber()
  @IsPositive()
  readonly price?: number;

  @IsNumber()
  @IsPositive()
  readonly stock?: number;

  @IsUrl()
  readonly image?: string;
}*/

//Esto es una forma más limpia de hacer las validaciones del update ya que "es lo mismo" que el create
export class UpdateProductDto extends PartialType(CreateProductDto) {}
