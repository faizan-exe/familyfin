import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class InvestmentCreateDto {
  @IsNumber()
  @IsOptional()
  investedAmount?: number

  @IsString()
  @IsOptional()
  transactionId?: string

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

export class InvestmentUpdateDto {
  @IsNumber()
  @IsOptional()
  investedAmount?: number

  @IsString()
  @IsOptional()
  transactionId?: string

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
