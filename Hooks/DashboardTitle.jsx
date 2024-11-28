import PropTypes from "prop-types";

const DashboardTitle = ({title}) => {
    return (
        <div>
             <h1 className="font-bold text-center text-[48px] text-gray-600">{title}</h1>
        </div>
    );
};

export default DashboardTitle;

DashboardTitle.propTypes = {
    title: PropTypes.any,
  };