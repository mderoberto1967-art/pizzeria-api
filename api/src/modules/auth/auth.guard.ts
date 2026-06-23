import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<{ headers: Record<string, string> }>();
    const token = request.headers['x-pizzeria-token'];
    const expected = process.env.PIZZERIA_TOKEN ?? 'pizza-secret-2024';

    if (!token || token !== expected) {
      throw new UnauthorizedException('Token non valido o mancante');
    }
    return true;
  }
}
