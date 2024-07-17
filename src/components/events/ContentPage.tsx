// components/ContentPage.tsx
import React from 'react';
import Image from 'next/image';
import { Box, Typography, Container, List, ListItem, ListItemText } from '@mui/material';
import imageSrc1 from "../../../public/assets/images/lifeframe.png"

const ContentPage: React.FC = () => {
    return (
        <Container>
            <Box mb={4} position="relative" width="100%" height="70%" paddingBottom="56.25%"> {/* Aspect ratio 16:9 */}
                <Image
                    src={imageSrc1}
                    alt="Description of the image"
                    layout="fill"
                    objectFit="cover"
                />
            </Box>
            <Typography variant="body1" gutterBottom>
                One way of analyzing whether to engage in FDI is by using the OLI framework, also referred to as the eclectic approach, developed by John Dunning. His research led him to conclude that there are three conditions that will determine whether FDI is the most appropriate method of engaging in international business. These conditions are:
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ mb: 0 }}>
                1- Ownership advantage
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ mb: 0 }}>
                2- Location advantages
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ mb: 0 }}>
                3- Internalization advantages.
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ mb: 2, mt: 2 }}>
                The following sections discuss these three areas in greater detail.
            </Typography>
            <Typography variant="h6" gutterBottom>
                1- Ownership advantage
            </Typography>
            <Typography variant="body1" gutterBottom>
                Ownership advantage refers to certain firm-specific advantages that generate a profit or competitive advantage to the firm, allowing it to overcome liabilities of foreignness. These firm-specific advantages must be transferable across borders, which allows the MNE to become competitive despite the challenges it may face when competing in a foreign country. Examples of ownership advantage include:

                The ownership of firm-specific assets and technology that can be used abroad.
                The company brand, which is transferable across borders.
                Managerial knowledge and experience.
                Company culture, such a creating a learning environment; and
                Organisational structures, including the capacity to innovate and change.
                For example, the unique technical knowledge and managerial structures of Volkswagen (VW) have allowed the firm to successfully compete abroad by supplying cars that are popular in different continents and countries. IKEA’s unique style of flat-packed furniture has also proved to have global appeal, allowing it to compete in foreign markets where it is at a natural disadvantage due to liabilities of foreignness.
            </Typography>
          
            <Typography variant="h6" gutterBottom>
                2- Location advantage
            </Typography>
            <Typography variant="body1" gutterBottom>
                Location advantage refers to advantages that can be gained from combining the resources of the firm (ownership advantages) with the resources available in the host economy. Thus, FDI allows firms access to profitable resources or skills they would not have access to within their home market. Location advantages can include:

                Access to skilled labour.
                New or rapidly expanding product markets.
                Natural resources; and
                Government incentive schemes designed to encourage FDI.

                Locating operations in a foreign market can allow a firm to overcome several obstacles, including government protectionist policies and transportation costs, while also giving it the advantage of being close to the customer base. The location of these unique advantages will determine where the firm chooses to establish operations abroad. For example, Apple has fragmented its supply chain to take advantage of low wages in China.

                Agglomeration as a form of location advantage:

                Agglomeration refers to the clustering of similar businesses or industries in the same location. Agglomeration is considered a location advantage for several reasons. Firstly, agglomeration results in knowledge spill overs and the clustering of a skilled labour force in one region. The region may also develop a group of specialised suppliers who can service competing businesses. This has been the case in San Francisco and Silicon Valley, which have become regional hubs for the technology industry.
            </Typography>
            <List sx={{ ml: 4, listStyleType: 'disc', pl: 2 }}>
        <ListItem sx={{ display: 'list-item', p: 0 }}>
          <ListItemText primary="Increased efficiency" />
        </ListItem>
        <ListItem sx={{ display: 'list-item', p: 0 }}>
          <ListItemText primary="Better resource allocation" />
        </ListItem>
        <ListItem sx={{ display: 'list-item', p: 0 }}>
          <ListItemText primary="Access to new markets" />
        </ListItem>
      </List>
            <Typography variant="h6" gutterBottom>
                3- Internalisation advantage
            </Typography>
            <Typography variant="body1" gutterBottom>

                Internalisation advantages occur when it is more beneficial for a firm to establish its own production and sales operations in a foreign location as opposed to exporting or licensing their products to the host economy for instance, a firm may have acquired the necessary capital and assets that makes it profitable for them to control and manage the entire production process instead of outsourcing production to local manufacturers. Internalisation, therefore, allows a firm greater control of firm-specific knowledge and management skills, replacing external market relationships with internal supply processes. Nevertheless, to understand the advantages of internalisation, it is necessary to understand the importance of transaction costs. This section will first examine the importance of transaction costs and the cost of using the market, before examining the advantages of internalisation. Finally, this section will investigate some of the disadvantages of internalisation.

                Transaction costs
                Bargaining.
                Searching for appropriate trading partnerships.
                Policing, and ensuring contracts are enforced.
                Establishing terms, specifications, and prices.
                Due diligence.
            </Typography>
            <List sx={{ ml: 4, listStyleType: 'disc', pl: 2 }}>
        <ListItem sx={{ display: 'list-item', p: 0 }}>
          <ListItemText primary="Increased efficiency" />
        </ListItem>
        <ListItem sx={{ display: 'list-item', p: 0 }}>
          <ListItemText primary="Better resource allocation" />
        </ListItem>
        <ListItem sx={{ display: 'list-item', p: 0 }}>
          <ListItemText primary="Access to new markets" />
        </ListItem>
        <ListItem sx={{ display: 'list-item', p: 0 }}>
          <ListItemText primary="Access to new markets" />
        </ListItem>
      </List>
        </Container>
    );
};

export default ContentPage;
