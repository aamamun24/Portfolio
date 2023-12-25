import PropTypes from 'prop-types';

const Container = ({ children }) => {
    return (
        <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-12'>
            {children}
        </div>
    );
};

Container.propTypes = {
    children: PropTypes.node
};

export default Container;