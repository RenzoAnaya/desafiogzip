import express from 'express'
import compression from 'compression'
import log4js from 'log4js'
import logger from './logger'

const app = express()

app.get('/info', (req,res)=>{
    
})


app.get('*', compression(), (req,res)=>{
    logger.warn(`Esta url ${req.url} no existe`)
    res.send(`Esta url no existe`)
})



const logPrueba = log4js.getLogger('default')

const PORT = 8082

app.listen (PORT, ()=>{
    logPrueba.warn('Warn')
    logPrueba.debug('Debug')
    logPrueba.error('Error')
    logPrueba.info('Info')
})








