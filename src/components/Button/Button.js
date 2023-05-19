
import { memo } from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';


const cx = classNames.bind(styles);

function Button({
    
    // Tên button
    title,
    // Dữ liệu input
  
 
    // dạng button
    reset,
    edit,
    del,
    close,
    create,
    update,

    // function
    onEdit,
    onCreateModal,
    onClose,
    onCreateNewItem,
    onUpdate,
    onDelItem,
    onGetIndexOfItem,
    onChangeInput,
    onGetItemIndex,
    
    onReset,
    
    ...props
}) {
    const classes = cx('wrapper', {
        edit,
        del,
        reset,
        close,
        update,
    });

   

    function handleFn (){
        if(create){
            onCreateModal()
        }
        if (close){
            onClose()
        }
        if(edit){
            onEdit() // lấy index cảu item
        }
        if(onCreateNewItem){
            onCreateNewItem()
        }
        if(reset){
            onReset()
        }
       
        if(onChangeInput){
            onChangeInput()
        }
        if (update){
            onUpdate()
        }
       
        if ( onDelItem){
            onDelItem()
        }
        if (onGetIndexOfItem){
            onGetIndexOfItem()
        }
        
    }

    return (
        <button className={classes} {...props}
        onClick={handleFn}
        
        
        >
            {title}
            
         
        </button>
    );
}

export default memo(Button);
