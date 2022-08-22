import { Box, Heading, Icon, Stack, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface CardSkillProps {
  title: string;
  content: string;
  icon: IconType;
}

export const CardSkill = ({ title, content, icon }: CardSkillProps) => {
  return (
    <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      color="black"
      bg="#3E065F"
      borderColor={'blackAlpha.700'}
      borderRadius={'md'}
    >
      <Box textAlign={'center'}>
        <Icon as={icon} width={20} height={20} color="black" />
        <Heading fontSize="lg" justifySelf={'center'}>
          {title}
        </Heading>
      </Box>
      <Text mt={4} color="#c8d9de">
        {content}
      </Text>
    </Box>
  );
};
