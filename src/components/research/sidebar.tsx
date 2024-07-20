import React, { useState } from 'react';
import {
    TextField,
    List,
    ListItem,
    Checkbox,
    FormControlLabel,
    Typography,
    Box,
    InputAdornment,
    IconButton
} from '@mui/material';
import { makeStyles } from '@mui/styles'; // Import makeStyles from @mui/styles

import ClearIcon from '@mui/icons-material/Clear';
const useStyles = makeStyles({
    formLabelRoot: {
        color: "#476B87", // Example color
    }
});
interface Item {
    id: number;
    label: string;
}

const Sidebar: React.FC = () => {
    const classes = useStyles();

    const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});
    const [textFieldValue, setTextFieldValue] = useState<string>('');

    const items: Item[] = [
        { id: 11, label: 'Investment' },
        { id: 45, label: 'Private sectors' },
        { id: 77, label: 'Infrastructure' },
        { id: 88, label: 'Government' },
        { id: 11, label: 'Development' },
        { id: 17, label: 'Transparency' },
        { id: 88, label: 'Regional Policies' },
        { id: 47, label: 'Statistics' },



    ];

    const handleToggle = (item: Item) => () => {
        const newCheckedItems = { ...checkedItems, [item.id]: !checkedItems[item.id] };
        setCheckedItems(newCheckedItems);

        const checkedValues = items.filter(it => newCheckedItems[it.id]).map(it => it.label);
        setTextFieldValue(checkedValues.join(', '));
    };

    const handleClear = () => {
        setCheckedItems({});
        setTextFieldValue('');
    };

    return (
        <Box style={{ padding: '27px', width: '100%', backgroundColor: '#ffffff' }} >
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Topics</Typography>
                <Typography sx={{color:"#476B87"}} onClick={handleClear}>
                    Clear
                </Typography>
            </Box>
            <TextField
                label="Checked Items"
                variant="outlined"
                fullWidth
                value={textFieldValue}
                onChange={(e) => setTextFieldValue(e.target.value)}
                InputProps={{
                    style: {
                        color:"#476B87",
                        height: '50px',
                        textAlign: 'center' // تحديد محاذاة النص إلى وسط

                    },
                    endAdornment: textFieldValue && (
                        <InputAdornment position="end">
                            <IconButton onClick={handleClear}>
                                <ClearIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
                InputLabelProps={{
                    classes: {
                        root: classes.formLabelRoot // Applying custom styles
                    }
                }}
            />
            <List >
                {items.map((item) => (
                    <ListItem key={item.id} sx={{ padding: 0, height: '25px' }}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checkedItems[item.id] || false}
                                    onChange={handleToggle(item)}
                                    name={item.label}
                                    sx={{
                                        color: "#476B87",
                                        '&.Mui-checked': {
                                          color: "#476B87",
                                        },
                                      }}
                                />
                            }
                            label={
                                <Box display="flex" justifyContent="space-between" width="100%">
                                    <Typography sx={{
                                        fontWeight: 400,
                                        fontSize: '18px',
                                        color: '#476B87',
                                        lineHeight: '22.63px'
                                    }}>
                                        <span>{item.label}</span>
                                    </Typography>                                </Box>
                            }
                        />
                        <Typography sx={{ marginLeft: 'auto',fontWeight: 400,
                                        fontSize: '18px',
                                        color: '#476B87',
                                        lineHeight: '22.63px' }}>
                            <span>({item.id})</span>

                        </Typography>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default Sidebar;
