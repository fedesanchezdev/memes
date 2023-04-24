import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


export const Cookies = () => {
  const MySwal = withReactContent(Swal);
  Swal.fire('Bienvenido, acepta las cookies');
}

export default Cookies;
