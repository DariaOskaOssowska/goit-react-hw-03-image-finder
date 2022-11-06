import propTypes from 'prop-types';
import css from './Button.module.css';

export const Button = () => (
    <button
        className={css.Button}
        type="button">Load more</button>
);

// Button.propTypes = {
//   text: propTypes.string.isRequired,
// //   onClick: propTypes.func.isRequired,
// };
