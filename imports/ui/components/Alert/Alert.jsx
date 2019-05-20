import swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function Alert(params) {
    const Swal = withReactContent(swal)
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
    })

    if (params.query === 'Swal') {
        Swal.fire({ type: params.type, title: params.title, text: params.text })
    } else if (params.query === 'Toast') {
        Toast.fire({ type: params.type, title: params.title })
    } else {
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Please, use correct query type',
        })
    }
}
