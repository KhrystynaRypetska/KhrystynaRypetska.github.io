import InputsLabel from './modules/inputsLabel'


// // Name
// const NAMEISREQUIRED = true;
// const MSGSNAMEERROR = "Поле обязательно для заполнения";
//
// // Телефон
// const TELISREQUIRED = false;
// const MSGSTELERROR = "Поле обязательно для заполнения";
//
// // Email
// const EMAILISREQUIRED = false;
// const MSGSEMAILERROR = "Поле обязательно для заполнения";
// const MSGSEMAILINCORRECT = "Некорректный почтовый адрес";
//
// // Text
// const TEXTISREQUIRED = false;
// const MSGSTEXTERROR = "Поле обязательно для заполнения";
//
// // Файл
// const FILEISREQUIRED = false;
// const MSGSFILEERROR = "Поле обязательно для заполнения";
//
// // Соглашение
// const AGGREMENTISREQUIRED = false;
// const MSGSAGGREMENTERROR = "Поле обязательно для заполнения";
//
// // Повідомлення про успішне відправлення форми
// const MSGSSUCCESS = "Спасибо! Ваш запрос получен!";
//
// // *** SMTP *** //
//
// require_once($_SERVER['DOCUMENT_ROOT'] . '/mail/phpmailer/smtp.php');
// const HOST = 'ssl://smtp.yandex.ru';
// const LOGIN = 'sender@yandex.ru';
// const PASS = 'senderPass';
// const PORT = '465';
//
// // *** /SMTP *** //
//
// // Почта с которой будет приходить письмо
// const SENDER = 'sender@yandex.ru';
//
// // Почта на которую будет приходить письмо
// const CATCHER = 'catcher@mail.ru';
//
// // Тема письма
// const SUBJECT = 'Заявка с сайта';
//
// // Кодировка
// const CHARSET = 'UTF-8';




// $msgs = [];
// if (isset($_POST['name']) ) {
//     if(empty($_POST['name']) && NAMEISREQUIRED) {
//         $msgs['name'] = MSGSNAMEERROR;
//     } else {
//         if (!empty($_POST['name'])) {
//             $name = "<b>Имя: </b>" . trim(strip_tags($_POST['name'])) . "<br>";
//         }
//
//     }
// }
//
// if (isset($_POST['tel']) ) {
//     if(empty($_POST['tel']) && TELISREQUIRED) {
//         $msgs['tel'] = MSGSTELERROR;
//     } else {
//         if (!empty($_POST['tel'])) {
//             $tel = "<b>Телефон: </b> " . trim(strip_tags($_POST['tel'])) . "<br>";
//         }
//     }
// }
//
// if (isset($_POST['email']) ) {
//     if(empty($_POST['email']) && EMAILISREQUIRED) {
//         $msgs['email'] = MSGSEMAILERROR;
//     } else {
//         if(!empty($_POST['email'])) {
//             if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
//                 $email = "<b>Почта: </b> " . trim(strip_tags($_POST['email'])) . "<br>";
//             } else {
//                 $msgs['email'] = MSGSEMAILINCORRECT;
//             }
//         }
//     }
// }
//
// if((empty($_POST['email']) && empty($_POST['tel'])) && (!EMAILISREQUIRED && !TELISREQUIRED)) {
//     $msgs['attantion'] = 'Заполните хотя бы одно контактное поле для связи с вами';
// }
//
// if ($msgs) {
//     echo json_encode($msgs);
//     die;
// } else {
//     $msgs['success'] = MSGSSUCCESS;
// }


export default class Form {
    constructor(inputs = $('.form__field .input')) {
        this.inputs = inputs

    }

    inputsLabel(item) {
        const inputs = new InputsLabel(item)
        inputs.init()
    }

    init() {
        if (this.inputs.length) {
            this.inputsLabel(this.inputs)
        }
    }
}