import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class AccountCreateDto {
  @IsString()
  @IsOptional()
  accountType?: string

  @IsNumber()
  @IsOptional()
  balance?: number

  @IsString()
  @IsOptional()
  userId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}

export class AccountUpdateDto {
  @IsString()
  @IsOptional()
  accountType?: string

  @IsNumber()
  @IsOptional()
  balance?: number

  @IsString()
  @IsOptional()
  userId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}
