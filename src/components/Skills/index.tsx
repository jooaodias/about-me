import { Box, Heading, Icon, Stack, Text } from '@chakra-ui/react';
import { CardSkill } from '../CardSkill';
import { SiReact, SiNextdotjs, SiTestinglibrary } from 'react-icons/si';
import { AiOutlineMobile } from 'react-icons/ai';
import { skills } from '../../content/skills';

const icons = [SiReact, SiNextdotjs, AiOutlineMobile, SiTestinglibrary];

const Skills = () => {
  return (
    <Stack
      direction="column"
      alignItems={'center'}
      justifyContent="center"
      p={12}
    >
      <Box p={5} color={'purple.400'}>
        <Heading
          fontSize="xx-large"
          color={'black'}
          id="Skills"
          fontWeight={'bold'}
        >
          Skills
        </Heading>
      </Box>
      <Box id="Skills">
        <Stack spacing={8} direction={['column', 'row']} alignItems={'center'}>
          {skills.map(({ content, title }, i) => {
            return (
              <CardSkill title={title} content={content} icon={icons[i]} />
            );
          })}
        </Stack>
      </Box>
    </Stack>
  );
};

export default Skills;
