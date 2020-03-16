
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>

<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
</head>

<body>
    <div>На сайте hyundai.ru заполнена анкета на работу в XMMP</div>

    <div>Имя: {{ $data->name }}</div>
    <div>Фамилия: {{ $data->surname }}</div>
    <div>Отчество: {{ $data->patronymic }}</div>
    <div>E-Mail: {{ $data->email }}</div>
    <div>Телефон: {{ $data->tel }}</div>
    <div>ВУЗ: {{ $data->institute }}</div>
    <div>ВУЗ (если ввели вручную): {{ $data->otherinstitute }}</div>
    <div>Специальность: {{ $data->specialty }}</div>
    <div>Уровень образования: {{ $data->level }}</div>
    <div>Курс: {{ $data->stage }}</div>
    <div>Уровень владения английским: {{ $data->lang }}</div>
    <div>Файл с резюме: <a href="https://www.hyundai.ru/storage/{{ $data->file }}">Скачать</a></div>
</body>

</html>
