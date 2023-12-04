function formatDate(input) {
    let value = input.value.replace(/\D/g, "");

    if (value.length > 2) {
        value = value.substring(0, 2) + "/" + value.substring(2);
    }

    input.value = value;
}
