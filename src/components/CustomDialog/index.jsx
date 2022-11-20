import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



const CustomDialog = ({text, setOpen, open}) => {
    const handleClose = () => {}

    return (
        <div>
            <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{text}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default CustomDialog