import Swal from "sweetalert2";

function _toast(title, position, color, background, iconColor, timer) {
    return Swal.mixin({
        toast: true,
        position: position,
        showConfirmButton: false,
        background: background,
        color: color,
        iconColor: iconColor,
        timer: timer,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        },
    });
}

const toasterService = {
    success: (
        title,
        position = "top-end",
        color = "#fff",
        background = "#3F72AF",
        iconColor = "#112D4E",
        timer = 3000
    ) => {
        const Toast = _toast(
            title,
            position,
            color,
            background,
            iconColor,
            timer
        );

        Toast.fire({
            icon: "success",
            title: title,
        });
    },
    error: (
        title,
        position = "top-end",
        color = "#fff",
        background = "#3F72AF",
        iconColor = "#112D4E",
        timer = 3000
    ) => {
        const Toast = _toast(
            title,
            position,
            color,
            background,
            iconColor,
            timer
        );
        Toast.fire({
            icon: "error",
            title: title,
        });
    },
    info: (
        title,
        position = "top-end",
        color = "#fff",
        background = "#3F72AF",
        iconColor = "#112D4E",
        timer = 3000
    ) => {
        const Toast = _toast(
            title,
            position,
            color,
            background,
            iconColor,
            timer
        );
        Toast.fire({
            icon: "info",
            title: title,
        });
    },
    warning: (
        title,
        position = "top-end",
        color = "#fff",
        background = "#3F72AF",
        iconColor = "#112D4E",
        timer = 3000
    ) => {
        const Toast = _toast(
            title,
            position,
            color,
            background,
            iconColor,
            timer
        );
        Toast.fire({
            icon: "warning",
            title: title,
        });
    },
    question: (
        title,
        position = "top-end",
        color = "#fff",
        background = "#3F72AF",
        iconColor = "#112D4E",
        timer = 3000
    ) => {
        const Toast = _toast(
            title,
            position,
            color,
            background,
            iconColor,
            timer
        );
        Toast.fire({
            icon: "question",
            title: title,
        });
    },
};

export default toasterService;
