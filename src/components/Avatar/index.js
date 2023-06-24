import * as React from 'react';
import {useStyletron} from 'baseui';
import {expandBorderStyles} from 'baseui/styles';
import { Avatar } from '@mui/material';
import Image from '../../Imagem';

export default function Index({src,expanded,square}) {
  const [css] = useStyletron();
 

  return (
<img width={'60px'} height={'60px'} alt='' src={ src} />
  );
}