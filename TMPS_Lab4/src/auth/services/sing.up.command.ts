import { Command } from 'auth/interfaces/command.pattern';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from 'auth/dto/auth-credentials.dto';

export class SignUpCommand implements Command {
  constructor(
    private authService: AuthService,
    private authCredentialsDto: AuthCredentialsDto,
  ) {}

  async execute(): Promise<void> {
    await this.authService.signUp(this.authCredentialsDto);
  }
}
