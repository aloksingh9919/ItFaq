import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Link from 'next/link';

export default function AllPostButton() {
  return (
    <FormGroup>
      {/* <FormControlLabel control={<Switch defaultChecked />} label="All Post" /> */}
      
      <Link href={"/allpost"}>All Post</Link>
      {/* <FormControlLabel required control={<Switch />} label="Required" />
      <FormControlLabel disabled control={<Switch />} label="Disabled" /> */}
    </FormGroup>
  );
}