import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate} from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRouters = ({ children }) => {
    const { user,loading } = useContext(AuthContext)
    if(loading)
   return  <span className="loading loading-spinner text-warning"></span>
    if (user)
        return children;
    else
        return <Navigate to='/login'></Navigate>

};
PrivateRouters.propTypes = {
    children: PropTypes.node,
};
export default PrivateRouters;
