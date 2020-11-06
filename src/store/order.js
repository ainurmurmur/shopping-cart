import {observable, action, decorate} from 'mobx';


class Order {

    showModal = false;
    state = {
        formData: {
            name: {
                label: 'Ваше имя',
                value: ''
            },
            adress: {
                label: 'Ваш адрес',
                value: ''
            },
            phone: {
                label: 'Ваш номер телефона',
                value: ''
            },
        }
    }


    show() {
        this.showModal = true;
    }

    hide() {
        this.showModal = false;
    }

    confirm() {
        this.hide();
        // this.props.onSend();
    }

    onBack() {
        this.hide();

    }

    changeFormData = (name, value) => {

        // let formData = {...this.formData};
        // formData[name] = {...formData[name], value};
        // this.setState({formData});
        this.state.formData[name].value = value;
        // let formData = {...this.state.formData};
        // formData[name] = {...formData[name], value};
        // this.setState({formData});/

    }
}

decorate(Order, {
    state: observable,
    showModal: observable,
    show: action,
    hide: action,
    confirm: action,
    onBack: action,
    changeFormData: action
});

export default new Order();

