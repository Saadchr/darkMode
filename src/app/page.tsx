import {
  Container,
  Flex,
  Heading,
  Text,
  Card,
  Badge,
  Button,
  Box,
} from "@radix-ui/themes";
import IconDarkLight from "@/components/IconDarkLight";
import { ChatBubbleIcon, SunIcon, MoonIcon } from "@radix-ui/react-icons";
import "@radix-ui/themes/styles.css";

export default function Home() {
  return (
    <main className=" flex min-h-full flex-col  items-center justify-between p-16 ">
      <Container className="border border-red-950" size="1">
        <Flex direction="column" pb="4">
          <Flex
            m={"0"}
            p={"0"}
            justify={"between"}
            align={"baseline"}
            className="border border-red-7"
          >
            <Heading>Coding Issue Tracker</Heading>
            <IconDarkLight />
          </Flex>

          <Text>
            Here you can find the issues relevant to your certain project.
          </Text>
        </Flex>

        <Flex className="border-4 border-green-400" gap="7" direction="column">
          <Card
            variant="surface"
            className="hover:shadow-lg m-0 hover:scale-105 transition-all duration-100 ease-in-out  hover:bg-gray-1 bg-red-3 "
          >
            <Flex gap="1" direction="column">
              <Text>Issue #23 - Button Is Wrong Color</Text>
              <Flex gap="2">
                <Badge>Devops</Badge>
                <Badge>UI</Badge>
              </Flex>
              <Text color="gray">
                This is an issue that is very serious. On a dashboard that only
                5 users use, there is a button that is the wrong shade of green.
                This is mission
              </Text>
              <Button className="hover:cursor-pointer" color="amber">
                Click on my tomato
              </Button>

              <Flex justify="between" pt="1">
                <Flex align="center">
                  {" "}
                  {/* align icon to our text */}
                  <ChatBubbleIcon />
                  <Text ml="2" size="1">
                    3 Comments
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Card>

          <Card
            variant="ghost"
            className="bg-gray-3 hover:scale-105 hover:bg-gray-6"
          >
            <Flex gap="1" direction="column">
              <Text>Issue #24 - Button Is Wrong Color</Text>
              <Flex gap="2">
                <Badge>Backend</Badge>
              </Flex>
              <Text>
                This is an issue that is very serious. On a dashboard that only
                5 users use, there is a button that is the wrong shade of green.
                This is mission critical.
              </Text>
              <Flex justify="between" pt="1">
                <Flex align="center">
                  {" "}
                  {/* align icon to our text */}
                  <ChatBubbleIcon />
                  <Text ml="2" size="1">
                    3 Comments
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Card>
          <Card variant="ghost">
            <Flex gap="1" direction="column">
              <Text>Issue #24 - Button Is Wrong Color</Text>
              <Flex gap="2">
                <Badge>Hacking Team</Badge>
              </Flex>
              <Text>
                This is an issue that is very serious. On a dashboard that only
                5 users use, there is a button that is the wrong shade of green.
                This is mission critical.
              </Text>
              <Flex justify="between" pt="1">
                <Flex align="center">
                  {" "}
                  {/* align icon to our text */}
                  <ChatBubbleIcon />
                  <Text ml="2" size="1">
                    3 Comments
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Card>
        </Flex>
      </Container>
    </main>
  );
}
