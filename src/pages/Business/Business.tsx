import { useGetUser } from './hooks/useGetUser';
import { Wrapper, ViewUserArea } from './styles';
import CreateUser from './components/CreateUser';
import Swal from 'sweetalert2';

import ViewUser from './components/ViewUser';
import { getCookie } from '../../api/auth/CookieUtils';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const Business = () => {
  const { data, isLoading } = useGetUser();
  const navigate = useNavigate();

  if (!data && isLoading) {
    <div>Loading</div>;
  }

  const token = getCookie('token');

  if (!token) {
    Swal.fire({
      icon: 'warning',
      title: '비정상적인 접근입니다',
    });
    navigate('/');
  }
  const decoded = token && jwtDecode<JwtPayload>(token);
  const authLevel = decoded ? decoded.authLevel : '';

  if (authLevel === 2 || authLevel === 3) {
    Swal.fire({
      icon: 'warning',
      title: '권한이 없습니다',
    });
    navigate('/main');
  }

  return (
    <Wrapper>
      <ViewUser />
      <CreateUser />
    </Wrapper>
  );
};

export default Business;
