import { Card, Divider, Text, Badge, Avatar } from "@nextui-org/react";
import React from "react";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";

export const Leadership = () => {
  const badgeGradient = {
    background:
      "linear-gradient(112deg, #06B7DB -63.59%, #FF4ECD -20.3%, #0072F5 70.46%)",
  };

  return (
    <>
      <Box
      id="leadership"
        css={{
          px: "$6",
          pb: "$14",
        }}
      >
        <Flex
          direction={"column"}
          justify={"center"}
          align={"center"}
          css={{
            pt: "$20",
          }}
        >
          <Text css={{ color: "$blue600" }} h3>
            Leadership
          </Text>
          <Text
            span
            css={{
              maxWidth: "800px",
              color: "$accents8",
              textAlign: "center",
            }}
          ></Text>
        </Flex>
        <Flex
          align={"center"}
          justify={"center"}
          wrap={"wrap"}
          css={{
            gap: "1rem",
            pt: "$14",
          }}
        >
          <Card
            style={{
              maxWidth: "500px",
              minHeight: "250px",
              maxHeight: "250px",
            }}
          >
            <Card.Body css={{ gap: "0.5rem" }}>
              <h3>Aditya Sahasranam</h3>
              <Badge style={badgeGradient}>President | Director of Tech</Badge>
              <p>
                Adi is a sophomore in High School who is very interested in
                Technology. He coordinates the club activities and manages the Technology related activities of the club. His extracurriculars are Tennis, Band and Decathlon.
              </p>
            </Card.Body>
          </Card>
          <Card
            style={{
              maxWidth: "500px",
              minHeight: "250px",
              maxHeight: "250px",
            }}
          >
            <Card.Body css={{ gap: "0.5rem" }}>
              <h3>Lucas Esqueda</h3>
              <Badge style={badgeGradient}>Vice President</Badge>
              <p>Lucas is a sophomore in High School...</p>
            </Card.Body>
          </Card>
        </Flex>
        <Flex
          align={"center"}
          wrap={"wrap"}
          justify={"center"}
          css={{
            gap: "1rem",
            pt: "$8",
          }}
        >
          <Card
            style={{
              maxWidth: "500px",
              minHeight: "250px",
              maxHeight: "250px",
            }}
          >
            <Card.Body css={{ gap: "0.5rem" }}>
              <h3>Marianne Lababit</h3>
              <Badge style={badgeGradient}>Secretary</Badge>
              <p>
                I am Secretary for the club. I help by taking minutes and giving
                my thoughts on events that we are planning. Outside the club, I
                am involved in Color Guard and other clubs like CSF and
                Environmental Club.
              </p>
            </Card.Body>
          </Card>
          <Card
            style={{
              maxWidth: "500px",
              minHeight: "250px",
              maxHeight: "250px",
            }}
          >
            <Card.Body css={{ gap: "0.5rem" }}>
              <h3>Xinyu Yang</h3>
              <Badge style={badgeGradient}>
                Treasurer | Co-Director of Science
              </Badge>
              <p>
                I help in the Science aspect of the club alongside Greyson and
                will manage club funds when we obtain them. I study biology
                outside of school to try and further my knowledge of the
                sciences.
              </p>
            </Card.Body>
          </Card>
        </Flex>
        <Flex
          align={"center"}
          wrap={"wrap"}
          justify={"center"}
          css={{
            gap: "1rem",
            pt: "$8",
          }}
        >
          <Card
            style={{
              maxWidth: "500px",
              minHeight: "250px",
              maxHeight: "250px",
            }}
          >
            <Card.Body css={{ gap: "0.5rem" }}>
              <h3>Greyson Mueller</h3>
              <Badge style={badgeGradient}>Director of Science</Badge>
              <p>Greyson is sophomore in high school who enjoys science. He's in FFA where he learns about veterinary sciences on a CDE team. He handles science related matters in STEM Club along with Xinyu and enjoys sharing his scientific knowledge with others.</p>
            </Card.Body>
          </Card>
          <Card
            style={{
              maxWidth: "500px",
              minHeight: "250px",
              maxHeight: "250px",
            }}
          >
            <Card.Body css={{ gap: "0.5rem" }}>
              <h3>Breanna Cruz</h3>
              <Badge style={badgeGradient}>Director of Engineering</Badge>
              <p>
                I am the director of Engineering for the STEM Club. For the
                engineering part of our club, I plan to make fun projects
                that’ll help the members that are interested in engineering.
                Outside of our STEM Club, I am involved in CSF, Color Guard, and
                Environmental Club.
              </p>
            </Card.Body>
          </Card>
        </Flex>
        <Flex
          align={"center"}
          wrap={"wrap"}
          justify={"center"}
          css={{
            gap: "1rem",
            pt: "$8",
          }}
        >
          <Card
            style={{
              maxWidth: "500px",
              minHeight: "250px",
              maxHeight: "250px",
            }}
          >
            <Card.Body css={{ gap: "0.5rem" }}>
              <Card.Header>
                <Avatar squared size="lg" src="andrew.png" css={{ mr: "$7" }} />
                <h3>Andrew Pelton</h3>
              </Card.Header>
              <Badge style={badgeGradient}>
                Director of Math | Co-Director of Tech
              </Badge>
              <p>
                I am the director of Math at the STEM Club. I'm currently a
                sophomore, and participate in the band at school. I really enjoy
                coding and hope to share my passion for math and tech!
              </p>
            </Card.Body>
          </Card>
          <Card
            style={{
              maxWidth: "500px",
              minHeight: "250px",
              maxHeight: "250px",
            }}
          >
            <Card.Body css={{ gap: "0.5rem" }}>
              <h3>Dylan Gambino</h3>
              <Badge style={badgeGradient}>Co-Director of Engineering</Badge>
              <p>Dylan is sophomore in high school...</p>
            </Card.Body>
          </Card>
        </Flex>
      </Box>

      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
