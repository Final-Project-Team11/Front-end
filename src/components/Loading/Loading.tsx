import LoadingSpinner from '../../assets/images/LoadingSpinner.gif';

interface LoadingSpinnerProps {
  sizes?: 'big' | 'small';
}

const Loading = ({ sizes }: LoadingSpinnerProps) => {
  return (
    <div>
      <img
        src={LoadingSpinner}
        alt="로딩중입니다.."
        style={
          sizes === 'big'
            ? { width: '200px', height: '200px' }
            : { width: '100px', height: '100px' }
        }
      />
    </div>
  );
};

export default Loading;
