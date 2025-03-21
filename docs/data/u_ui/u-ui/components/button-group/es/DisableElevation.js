import * as React from 'react';
import ButtonGroup from '@u_ui/u-ui/ButtonGroup';
import Button from '@u_ui/u-ui/Button';

export default function DisableElevation() {
  return (
    <ButtonGroup
      disableElevation
      variant="contained"
      aria-label="Grupo de botones desactivados"
    >
      <Button>Uno</Button>
      <Button>Dos</Button>
    </ButtonGroup>
  );
}
