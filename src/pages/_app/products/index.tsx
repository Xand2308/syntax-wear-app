import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/products/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='container'>
    <h1 className='text-black'>Olá</h1>

    <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dicta alias tempora provident facilis corporis cum autem quos totam. Quaerat accusantium, enim labore aliquid assumenda placeat fuga repudiandae error quo?</p>
    <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dicta alias tempora provident facilis corporis cum autem quos totam. Quaerat accusantium, enim labore aliquid assumenda placeat fuga repudiandae error quo?</p>
    <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dicta alias tempora provident facilis corporis cum autem quos totam. Quaerat accusantium, enim labore aliquid assumenda placeat fuga repudiandae error quo?</p>
    <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dicta alias tempora provident facilis corporis cum autem quos totam. Quaerat accusantium, enim labore aliquid assumenda placeat fuga repudiandae error quo?</p>
    <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dicta alias tempora provident facilis corporis cum autem quos totam. Quaerat accusantium, enim labore aliquid assumenda placeat fuga repudiandae error quo?</p>
  </div>
}
