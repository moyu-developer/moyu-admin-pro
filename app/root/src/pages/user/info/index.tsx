import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Text,
  Image,
  VStack,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import PageContainer from "@/components/PageContainer";
import Card from "@/components/Card";

const UserInfo = () => {
  return (
    <PageContainer>
      <Grid templateColumns='repeat(4, 1fr)' gap={6}>
        <GridItem colSpan={1} w='100%'>
          <Card>
          <VStack>
          <Image
            borderRadius='full'
            boxSize='150px'
            src='https://bit.ly/dan-abramov'
            alt='Dan Abramov'
          />
          <Heading size="md">1</Heading>
          <Text>一句话描述你当前在干什么吧</Text>
          </VStack>
          </Card>
        </GridItem>
        <GridItem colSpan={3} w='100%'>
          <Card title="Edit" >
          <Tabs>
  <TabList>
    <Tab>One</Tab>
    <Tab>Two</Tab>
    <Tab>Three</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
          </Card>
        </GridItem>
      </Grid>
      {/* <Center h="200px">
        <Box
          maxW="4xl"
          minH="200px"
          w="full"
          px={{ base: "4", md: "4" }}
          py={{ base: "3", md: "3" }}
          bg="white"
          borderRadius="lg"
          boxShadow={useColorModeValue("sm", "sm-dark")}
          position="relative"
        >
          111
          <Button position="absolute" right="24px" top="24px" >Edit</Button>
        </Box>
      </Center> */}
    </PageContainer>
  );
};

export default UserInfo;
