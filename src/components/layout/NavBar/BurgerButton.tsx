
import { StyledBurgerButton } from './styles';

const BurgerButton = ({open, setOpen, ...props}) => {
  return (
    <StyledBurgerButton
      aria-label="Toggle menu"
      aria-expanded={open}
      onClick={() => setOpen(!open)} {...props}
      $open={open}
    >
      <span />
      <span />
      <span />
    </StyledBurgerButton>
  )
}


export default BurgerButton;
