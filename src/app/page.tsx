import {
  Container,
  Flex,
  Heading,
  Text,
  Card,
  Box,
  Badge,
  Button,
  IconButton,
} from "@radix-ui/themes";
import IconDarkLight from "@/components/IconDarkLight";
import { ChatBubbleIcon, SunIcon, MoonIcon } from "@radix-ui/react-icons";
import "@radix-ui/themes/styles.css";

export default function Home() {
  return (
    <main className="flex min-h-full flex-col items-center justify-between p-16">
      <Container size="1">
        <Flex direction="column" pb="4">
          <Flex justify={"between"} align={"baseline"}>
            <Heading>Coding Issue Tracker</Heading>
            <IconDarkLight />
          </Flex>
          <Text>
            Here you can find the issues relevant to your certain project.
          </Text>
        </Flex>

        <Flex gap="4" direction="column">
          <Card className="hover:shadow-lg hover:scale-105 transition-all duration-100 ease-in-out bg-red-7 hover:bg-gray-1 ">
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

          <Card className="bg-gray-3">
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
          <Card>
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
