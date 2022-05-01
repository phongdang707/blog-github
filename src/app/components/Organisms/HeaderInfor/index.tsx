// Libraries
import React from 'react';
import { H1, Avatar } from 'app/components/Atoms';

interface HeaderInforProps {}

export const HeaderInfor: React.FC<HeaderInforProps> = props => {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex-1">
          <H1 className="font-bold text-left">Phong Dang</H1>
          <span>Software Engineer ( Software Engineer )</span>
        </div>
        <div className="flex-none">
          <Avatar link="https://scontent.fhan3-2.fna.fbcdn.net/v/t1.6435-9/142628492_1446887289012564_9141674745846238007_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=174925&_nc_ohc=J82Y7JuEmW0AX_LUpNe&_nc_ht=scontent.fhan3-2.fna&oh=00_AT_HPUvf9y-2SayK9GRymielSBoQrG4ss7PNyyqSdoKNvw&oe=62888883" />
        </div>
      </div>
    </>
  );
};
