import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class TransactionCreateDto {
  @IsNumber()
  @IsOptional()
  amount?: number

  @IsString()
  @IsOptional()
  transactionType?: string

  @IsString()
  @IsOptional()
  timestamp?: string

  @IsString()
  @IsOptional()
  accountId?: string

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

export class TransactionUpdateDto {
  @IsNumber()
  @IsOptional()
  amount?: number

  @IsString()
  @IsOptional()
  transactionType?: string

  @IsString()
  @IsOptional()
  timestamp?: string

  @IsString()
  @IsOptional()
  accountId?: string

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
