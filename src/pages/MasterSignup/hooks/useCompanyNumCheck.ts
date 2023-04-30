import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';

export const useCompanyNumCheck = () => {
  const [isValid, setIsValid] = React.useState<boolean>(false);

  // 숫자 10자리 유효성 체크
  const checkCompanyNum = (num: string) => {
    const validNum = num.length === 10 && /^\d+$/.test(num);

    setIsValid(validNum);

    if (isValid) {
      Swal.fire({
        icon: 'success',
        title: '인증되었습니다',
        text: '현재는 숫자 10자리로 인증 가능한 상태 입니다!',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: '유효하지 않은 번호 입니다',
        text: '현재는 숫자 10자리로 인증 가능한 상태 입니다!',
      });
    }
  };

  return { isValid, checkCompanyNum };
};

// 사업자 등록번호 조회 api
// export const handleButtonClick = async () => {
//   const [isValid, setIsValid] = React.useState<boolean | null>(false);
//   const COMPANYNUM_VALID_KEY = process.env.REACT_APP_COMPANYNUM_VALID_KEY;

//   try {
//     const response = await axios.post(
//       `https://api.odcloud.kr/api/nts-businessman/v1/status?serviceKey=${COMPANYNUM_VALID_KEY}`,
//       {
//         b_no: [signInfo.companyNum],
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           Accept: 'application/json',
//         },
//       }
//     );
//     const data = response.data.data[0];
//     if (data.b_stt_cd === '01' || data.b_stt_cd === '02' || data.b_stt_cd === '03') {
//       setIsValid(true);
//     } else {
//       setIsValid(false);
//     }
//   } catch (error) {
//     console.error(error);
//     setIsValid(false);
//   }
// };
