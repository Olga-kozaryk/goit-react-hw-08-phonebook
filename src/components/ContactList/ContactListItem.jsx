import { Box, Button, Flex, ListItem, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getFilter } from "../../redux/selector";

const HighlightText = ({ highlightText, name }) => {
    const indexSubstr = name.toLowerCase().indexOf(highlightText);

    const highlightText1 = name.slice(0, indexSubstr)
    const highlightText2 = name.slice(indexSubstr, indexSubstr + highlightText.length)
    const highlightText3 = name.slice(indexSubstr + highlightText.length)

    return <Text as='span'>{highlightText1}<Text as='span' fontWeight='bold'>{highlightText2}</Text>{highlightText3}</Text>
}

const ContactListItem = ({ item, onDelete }) => {
    const [isLoading, setIsLoading] = useState(false);
    const filter = useSelector(getFilter)

    const handleDeleteClick = () => {
        setIsLoading(true);
        onDelete(item.id).finally(() => setIsLoading(false))
    }

    return <ListItem marginBlock={6}>
        <Flex width="100%" justifyContent='space-between' alignItems='center'>
            <Box>
                <Text>
                    {!!filter ? <HighlightText highlightText={filter} name={item.name} /> : item.name}  {item.number}</Text>

            </Box>

            <Button isLoading={isLoading} colorScheme='red' onClick={handleDeleteClick} size="sm">
           
            </Button>
        </Flex>
    </ListItem>
}

export default ContactListItem