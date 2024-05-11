import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class GoalCreateDto {
  @IsString()
  @IsOptional()
  description?: string

  @IsNumber()
  @IsOptional()
  targetAmount?: number

  @IsNumber()
  @IsOptional()
  currentAmount?: number

  @IsString()
  @IsOptional()
  dueDate?: string

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

export class GoalUpdateDto {
  @IsString()
  @IsOptional()
  description?: string

  @IsNumber()
  @IsOptional()
  targetAmount?: number

  @IsNumber()
  @IsOptional()
  currentAmount?: number

  @IsString()
  @IsOptional()
  dueDate?: string

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
