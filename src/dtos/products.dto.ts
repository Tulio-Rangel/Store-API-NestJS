import { IsString, IsNumber, IsUrl, IsNotEmpty, IsPositive } from "class-validator";

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
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
export class UpdateProductDto {
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
}
