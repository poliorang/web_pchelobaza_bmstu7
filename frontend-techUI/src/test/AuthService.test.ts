import {AuthDao} from "../dao/auth/AuthDao";
import {SingupRqDto} from "../dto/SingupRqDto";
import {AuthServiceImpl} from "../service/auth/AuthServiceImpl";

class MockAuthDao implements AuthDao {
    login(login: string, password: string): Promise<string> {
        return Promise.resolve('token');
    }

    signup(dto: SingupRqDto): Promise<string> {
        return Promise.resolve('token');
    }
}

describe('AuthServiceImpl', () => {
    let authService: AuthServiceImpl;
    let mockAuthDao: MockAuthDao;

    beforeEach(() => {
        mockAuthDao = new MockAuthDao();
        authService = new AuthServiceImpl(mockAuthDao);
    });

    it('should call login method of AuthDao with correct arguments', async () => {
        const spyLogin = jest.spyOn(mockAuthDao, 'login').mockReturnValue(Promise.resolve('token'));

        await authService.login('username', 'password');

        expect(spyLogin).toHaveBeenCalledWith('username', 'password');
    });

    it('should return the token from AuthDao for login', async () => {
        const loginToken = await authService.login('username', 'password');

        expect(loginToken).toBe('token');
    });

    it('should call signup method of AuthDao with correct argument', async () => {
        const spySignup = jest.spyOn(mockAuthDao, 'signup').mockReturnValue(Promise.resolve('token'));

        const signupDto: SingupRqDto = {
            login: 'login',
            password: 'password',
            confirmPassword: 'password',
            name: 'name',
            surname: 'surname',
            contact: 'contact'
        };

        await authService.signup(signupDto);

        expect(spySignup).toHaveBeenCalledWith(signupDto);
    });

    it('should return the token from AuthDao for signup', async () => {
        const signupDto: SingupRqDto = {
            login: 'login',
            password: 'password',
            confirmPassword: 'password',
            name: 'name',
            surname: 'surname',
            contact: 'contact'
        };

        const signupToken = await authService.signup(signupDto);

        expect(signupToken).toBe('token');
    });
});