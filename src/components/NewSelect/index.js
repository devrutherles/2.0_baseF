import * as React from 'react';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Chip from '@mui/joy/Chip';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import styles from './index.module.sass'

export default function SelectDecorators(props) {
    const {Icon, label , number , onChange} = props
  return (
    <Select
      className={styles.select}
      size='sm'
      onChange={onChange}
      placeholder={number}
      
      startDecorator={<Icon />}
      endDecorator={
        <Chip size="sm" color="#3070F6" variant="outlined">
         {label}
        </Chip>
      }
      sx={{ width: 240 }}
    >
      <Option defaultChecked value={number}>{number}</Option>
      <Option value="2">2</Option>
      <Option value="3">3</Option>
      <Option value="4">4</Option>
      <Option value="5">5</Option>
      <Option value="6">6</Option>
      <Option value="7">7</Option>
      <Option value="8">8</Option>

    </Select>
  );
}