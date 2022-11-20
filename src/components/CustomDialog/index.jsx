import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';



const CustomDialog = ({ text, setOpen, open, content, handleConfirm }) => {
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Dialog
            sx={{position: 'absolute'}}
            open={open}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{text}</DialogTitle>
            <DialogContent>
                {content}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
                <Button onClick={handleConfirm}>Confirm</Button>
            </DialogActions>
        </Dialog>
    )
}

export default CustomDialog