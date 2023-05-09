import {
  SearchWrapper,
  StH1,
  StSpan,
  UserHead,
  UserInfo,
  ViewUserArea,
  Wrapper_Space,
} from '../styles';
import { Users, useGetUser } from '../hooks/useGetUser';
import Wrapper_Column from '../../../components/Atoms/Wrapper_Column/Wrapper_Column';
import CustomButton from '../../../components/Atoms/Button/CustomButton';
import React, { useEffect } from 'react';
import DetailUser from './DetailUser';
import apis from '../../../api/axios/api';
import Wrapper_Row from '../../../components/Atoms/Wrapper_Row/Wrapper_Row';
import Dropdown from '../../../components/Atoms/Dropdown/Dropdown';
import CustomInput from '../../../components/Atoms/Input/CustomInput';
import { AiOutlineSearch } from '@react-icons/all-files/ai/AiOutlineSearch';
import { GrFormClose } from '@react-icons/all-files/gr/GrFormClose';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ViewUser = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [selectedUser, setSelectedUser] = React.useState<Users | null>(null);

  const openModalWithUser = (user: Users) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const { data, isLoading } = useGetUser();
  const [searchResults, setSearchResults] = React.useState<Users[]>(data || []);
  const [searchQuery, setSearchQuery] = React.useState<string>('');

  // <-----------------------------------검색 기능----------------------------------->
  const searchUsers = async (userName: string): Promise<Users[]> => {
    const response = await apis.get(`/users/${userName}`);
    return response.data.users;
  };

  const handleSearch = async () => {
    if (searchQuery) {
      const results = await searchUsers(searchQuery);
      setSearchResults(results);
    } else {
      setSearchResults(data || []);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    setSearchResults(data || []);
  }, [data]);

  // useEffect(() => {
  //   handleSearch();
  //   console.log('이건 곤란?');
  // }, [searchQuery]);

  const useDebouncedEffect = (effect: () => void, delay: number, deps: string[]) => {
    const callback = React.useRef<() => void>();

    // 최신 effect를 callback ref에 저장합니다.
    useEffect(() => {
      callback.current = effect;
    }, [effect]);

    // delay 시간만큼 debounce된 effect를 실행합니다.
    useEffect(() => {
      const handler = setTimeout(() => {
        callback.current && callback.current();
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    }, [...deps, delay]);
  };

  useDebouncedEffect(handleSearch, 300, [searchQuery]);
  // <-----------------------------------필터링 기능----------------------------------->
  const teamArray = React.useMemo(() => {
    const teams = data
      ? data.reduce((uniqueTeam: { name: string; value: string }[], user: Users) => {
          if (!uniqueTeam.some(team => team.name === user.team)) {
            uniqueTeam.push({ name: user.team, value: user.team });
          }
          return uniqueTeam;
        }, [])
      : [];
    return [{ name: '팀별 보기', value: '팀별 보기' }, ...teams];
  }, [data]);

  const [selectedTeam, setSelectedTeam] = React.useState('');

  const handleTeamChange = (team: string | number) => {
    setSelectedTeam(team === '팀별 보기' ? data.team : team);
  };

  const filteredUsers = React.useMemo(() => {
    return data?.filter((user: Users) => {
      return selectedTeam ? user.team === selectedTeam : true;
    });
  }, [selectedTeam, data]);

  // 검색 쿼리를 처리하는 부분
  useDebouncedEffect(
    () => {
      if (searchQuery) {
        setSearchResults(
          filteredUsers.filter((user: Users) =>
            user.userName.toLowerCase().includes(searchQuery.toLowerCase())
          )
        );
      } else {
        setSearchResults(filteredUsers);
      }
    },
    500,
    [searchQuery, filteredUsers]
  );

  const waiting = () => {
    Swal.fire({
      icon: 'info',
      title: '준비 중인 기능입니다.',
    });
  };

  return (
    <ViewUserArea>
      <StH1>유저 조회</StH1>
      <Wrapper_Row
        style={{
          justifyContent: 'flex-end',
          width: '710px',
          marginBottom: '40px',
          gap: '10px',
        }}
      >
        <Dropdown
          onChange={(value: string | number) => {
            handleTeamChange(value);
          }}
          items={teamArray}
          style={{
            width: '120px',
            height: '30px',
            border: 'none',
            borderRadius: '4px',
            boxShadow: '0 4px 4px rgba(201, 201, 201, 0.25)',
            fontSize: '12px',
          }}
        >
          팀별 보기
        </Dropdown>
        <SearchWrapper>
          <CustomInput
            inputType="login"
            style={{ width: '120px', height: '30px', fontSize: '12px' }}
            value={searchQuery}
            onChange={handleInputChange}
          />
          {searchQuery.length > 0 ? (
            <GrFormClose className="searchIcon" onClick={() => setSearchQuery('')} />
          ) : (
            <AiOutlineSearch className="searchIcon" />
          )}
        </SearchWrapper>
      </Wrapper_Row>
      <Wrapper_Column style={{ marginBottom: '50px' }}>
        <div
          style={{
            width: '710px',
            borderBottom: '2px solid #000',
            boxSizing: 'border-box',
            padding: '0 35px 15px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <UserHead>팀</UserHead>
          <Wrapper_Space style={{ gap: '20px' }}>
            <UserHead>직급</UserHead>
            <UserHead>권한</UserHead>
          </Wrapper_Space>
          <Wrapper_Space style={{ gap: '20px' }}>
            <UserHead>직무</UserHead>
            <UserHead>이름</UserHead>
            <UserHead>입사 일자</UserHead>
          </Wrapper_Space>
        </div>
        <div style={{ height: '600px', overflow: 'auto' }}>
          {searchResults?.map((user: Users) => {
            return (
              <div
                key={user.userId}
                onClick={() => openModalWithUser(user)}
                style={{
                  width: '710px',
                  marginTop: '15px',
                  padding: '0 35px',
                  display: 'flex',
                  boxSizing: 'border-box',
                  justifyContent: 'space-between',
                }}
              >
                <UserInfo style={{ borderBottom: '0.5px solid black' }}>
                  {user.team}
                </UserInfo>
                <Wrapper_Space style={{ gap: '20px', borderBottom: '0.5px solid black' }}>
                  <UserInfo>{user.rank}</UserInfo>
                  <UserInfo>{user.authLevel === 2 ? '관리자' : '직원'}</UserInfo>
                </Wrapper_Space>
                <Wrapper_Space style={{ gap: '20px', borderBottom: '0.5px solid black' }}>
                  <UserInfo>{user.job}</UserInfo>
                  <UserInfo>{user.userName}</UserInfo>
                  <UserInfo>{String(user.joinDay)}</UserInfo>
                </Wrapper_Space>
              </div>
            );
          })}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '29px 0 50px',
            paddingRight: '35px',
          }}
        >
          <CustomButton
            buttonType="blackBackground"
            style={{ width: '150px' }}
            onClick={() => navigate('/main')}
          >
            홈으로
          </CustomButton>
        </div>
        {showModal && selectedUser && (
          <DetailUser
            user={selectedUser}
            closeModal={() => setShowModal(false)}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        )}
      </Wrapper_Column>
    </ViewUserArea>
  );
};

export default ViewUser;
